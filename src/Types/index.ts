import { MouseEventHandler } from "react";
import { Style } from "util";

export interface CustomButtonProps {
   
   
    title: string;
    containerStyles?: string;
    handleClick?:
    
     MouseEventHandler<HTMLButtonElement>;
    
  }
  export interface toggleButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?:
    
     MouseEventHandler<HTMLButtonElement>;
  }