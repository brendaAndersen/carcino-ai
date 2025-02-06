'use client';
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useRef, useState } from 'react';
import { FiPaperclip } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IoMdSend } from "react-icons/io";
// import { FaRegStopCircle } from "react-icons/fa";
import axios from "axios";

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export function ChatAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | undefined>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // const storedData = localStorage.getItem('newChat');

  useEffect(() => {
    const savedMessages = loadMessagesFromLocalStorage();
    if (savedMessages.length > 0) {
      setMessages(savedMessages);
    }
  }, []);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const saveMessagesToLocalStorage = (messages: Message[]) => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  };

  const loadMessagesFromLocalStorage = (): Message[] => {
    const messages = localStorage.getItem('chatMessages');
    return messages ? JSON.parse(messages) : [];
  };

  // if (storedData) {
  //   const parsedData = JSON.parse(storedData);
  //   if (Array.isArray(parsedData) && parsedData.length === 0) {
  //     console.log("O array de itens está vazio.");
  //   } else {
  //     console.log("O array de itens não está vazio:", Object.values(parsedData).map((e) => e));
  //   }
  // } else {
  //   console.log("Nenhum dado encontrado no storage.");
  // }

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input,
    };

    setMessages((prev) => {
      const updatedMessages = [...prev, userMessage];
      saveMessagesToLocalStorage(updatedMessages);
      return updatedMessages;
    });

    try {
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('user', 'abc-123');

        const uploadResponse = await axios.post(
          'https://api.dify.ai/v1/files/upload',
          formData,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_API}`, // adicionar key
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        console.log('Arquivo enviado com sucesso:', uploadResponse.data);
      }

      if (input) {
        const response = await axios.post(
          'https://api.dify.ai/v1/chat-messages',
          {
            inputs: {},
            query: input,
            response_mode: 'blocking',
            conversation_id: '',
            user: 'abc-123',
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_API}`, // adicionar key
              'Content-Type': 'application/json',
            },
          }
        );

        const assistantMessage: Message = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: response?.data.answer,
        };

        setMessages((prev) => {
          const updatedMessages = [...prev, assistantMessage];
          saveMessagesToLocalStorage(updatedMessages);
          return updatedMessages;
        });
      } else {
        toast('Necessário encaminhar uma mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);

      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: 'Desculpe, ocorreu um erro. Tente novamente.',
      };

      setMessages((prev) => {
        const updatedMessages = [...prev, errorMessage];
        saveMessagesToLocalStorage(updatedMessages);
        return updatedMessages;
      });
    }
    if (input) {
      setInput('');
      setFile(undefined);
    }
  };

  return (
    <div className="flex min-h-[60px] items-center justify-center bg-slate-50 
    dark:bg-gray-900 text-black dark:text-slate-700 rounded-md">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName={() =>
          "bg-[#226094] dark:bg-slate-800 text-white rounded-lg shadow-lg p-4 border border-[#0fcedc]"
        }
        bodyClassName={() => "text-sm leading-relaxed"}
        progressClassName="bg-[#0fcedc]"
      />

      <Card className="lg:w-[45rem] sm:w-[400px] md:w-[500px] min-h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle className="text-[#0879d8]">Carcino AI</CardTitle>
          <CardDescription>Caring for better life</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 overflow-y-auto max-h-[500px] p-4">

          {messages.map((msg) => (
            msg.content && (
              <div key={msg.id} className="flex gap-3 text-slate-600 dark:text-slate-400 text-sm text-justify">
                {msg.role === 'user' && (
                  <Avatar className="dark:bg-gray-200">
                    <AvatarImage src="https://www.webiconio.com/_upload/255/image_255.svg" />
                    <AvatarFallback className="text-gray-800 dark:white">User</AvatarFallback>
                  </Avatar>
                )}
                {msg.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="https://img.myloview.com.br/posters/robot-logo-design-700-158968747.jpg" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-[#0879d8]">
                    {msg.role === "user" ? "User" : "AI"}
                  </span>
                  {msg.content}
                </p>
              </div>
            )
          ))
          }

        </CardContent>

        <CardFooter>
          <form className="flex w-full gap-2" onSubmit={sendMessage}>
            <div className="relative w-full">
              <Input
                placeholder="How can I help you about carcinomatosis?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="pl-9"
              />

              <FiPaperclip
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={handleUpload}
              />

              <input
                ref={fileInputRef}
                type="file"
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : undefined)}
                className="hidden"
              />
            </div>
            <Button className="hover:bg-[#3f89ce] bg-[#0879d8] text-white" type="submit">
              <IoMdSend />
              {/* <FaRegStopCircle /> */}
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}