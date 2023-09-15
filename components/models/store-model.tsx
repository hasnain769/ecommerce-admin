"use client";
import { Model } from "../ui/model";
import { UseStoreModel } from "@/hooks/use-store-model";

export const StoreModel = () => {
  const storeModel = UseStoreModel();
  
  return(
    <Model
      title="create store"
      description="add a new store to manage your items"
      isopen={storeModel.isopen}
      onclose={storeModel.onClose}
    />)
 
};
