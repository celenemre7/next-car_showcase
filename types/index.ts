import {Combobox, Transition} from '@headlessui/react'

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
}

export interface SearchManufacturerProp {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
