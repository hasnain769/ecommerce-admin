"use client"
import { Model } from "@/components/ui/model";
import { UseStoreModel } from "@/hooks/use-store-model";
import { useEffect } from "react";

export default function Home() {
  const isopen=UseStoreModel((state)=>state.isopen)
  const onOpen=UseStoreModel((state)=>state.onOpen)
  
  useEffect(()=>{
   if(!isopen){
    onOpen();
   }
  },[isopen,onOpen])
    return (
     <div>
      root
     </div>
    )
  }
  