import React, { useEffect, useState } from "react";
import axios from "axios";

export const Chat = () => {
    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        handleInitialization();
    }, []);

    const handleClick = async (id: string) => {

        const response = await axios.get(
            `https://api.dify.ai/v1/messages?user=abc-123&conversation_id=` + id,
            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_API}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        localStorage.setItem('newChat', JSON.stringify(response.data.data[0]));
        console.log(Object.values(response).map((e) => e.answer))
    }

    const handleInitialization = async () => {
        const user = localStorage.getItem('user');
        try {
            const response = await axios.get(
                `https://api.dify.ai/v1/conversations?user=${user}&last_id=&limit=20`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_API}`,
                        'Content-Type': 'application/json',
                    },
                });

            setConversation(response?.data.data);
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };
    return (
        <div className="animate-slide-right space-y-4 overflow-y-auto max-h-[50rem] p-2">
            {Object.values(conversation).map((chat: { id: string, name: string }) => (
                <div
                    key={chat.id}
                    onClick={() => handleClick(chat.id)}
                    className="bg-[#2f56ac] hover:bg-[#3661bd] dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer w-full h-[4rem] p-5 pt-2 rounded-md"
                >
                    <p>{chat?.name}</p>
                </div>
            ))}
        </div>

    );

}