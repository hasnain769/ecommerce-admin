import { create } from "zustand";

interface useStoreModelStore{
    isopen :boolean,
    onOpen:()=>void,
    onClose:()=>void,
}

export const UseStoreModel =create<useStoreModelStore>((set)=>({
    isopen :false,
    onOpen :()=>set({isopen:true}),
    onClose:()=>set({isopen:false})
}));