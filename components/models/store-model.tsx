"use client";
import { Model } from "../ui/model";
import { UseStoreModel } from "@/hooks/use-store-model";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
const formSchema=z.object({
  name :z.string().min(1),
})

export const StoreModel = () => {
  const storeModel = UseStoreModel();
  const form= useForm<z.infer<typeof formSchema>>({
    resolver :zodResolver(formSchema)
  })
  return(
    <Model
      title="create store"
      description="add a new store to manage your items"
      isopen={storeModel.isopen}
      onclose={storeModel.onClose}
    />)
 
};
