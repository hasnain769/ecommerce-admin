"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

 
interface ModelProps{
    title:string;
    description:string;
    isopen:boolean;
    onclose :() =>void;
    children? :React.ReactNode;
};

export const Model:React.FC<ModelProps>=({
    title,
    description,
    isopen,
    onclose,
    children
})=>{
   const onChange=(open :boolean)=>{
    if(!open){
        onclose();
    }
   };

   return (
   <Dialog open={isopen} onOpenChange={onChange}>
       <DialogContent>
        <DialogHeader>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogDescription>
                {description}
            </DialogDescription>
        </DialogHeader>
        <div>{children}</div>
       </DialogContent>
   </Dialog> 
   )
}