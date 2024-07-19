'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from './firebase-config';
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [obituaries, setObituaries] = useState([]);

  useEffect(() => {
    const fetchObituaries = async () => {
      const querySnapshot = await getDocs(collection(db, "obituaries"));
      const obituariesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setObituaries(obituariesList);
    };
    fetchObituaries();
  }, []);

  return (
    <main className="flex justify-center">
      <div className="fixed top-0 h-20  flex justify-end items-center ">
        <button className="w-32 h-10 bg-gray-300 rounded-sm mr-3" onClick={() => router.push('/components/Upload')}>Upload</button>
      </div>
      <div className="mt-24 flex flex-wrap w-11/12 lg:bg-blue-300 items-center justify-between">
        {obituaries.map(obituary => (
          <div key={obituary.id} className="bg-white shadow-md rounded-lg p-4 m-4 w-96 h-[500px] overflow-scroll">
            
             <h2 className="text-xl font-bold">{obituary.fullName}</h2>
            <p>{obituary.biography}</p>
           <Image src={obituary.image} width={400} height={400} />
          </div>
        ))}
      </div>
    </main>
  );
}
