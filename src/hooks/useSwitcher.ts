import {MouseEventHandler, useState} from "react";

export function useSwitcher():[boolean,() => void] {
    const [state,setState] = useState<boolean>(false)
    function switcherPressed() {
        state ? setState(false) : setState(true)
    }
    return [state,switcherPressed]
}