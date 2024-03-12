import {useState} from "react";

export function useControlledInput(initialState?: string): [string, (e: string) => void] {
    const [state, setState] = useState<string>(initialState?initialState:'')

    function inputHandler(e: string) {
        setState(e)
    }

    return [state, inputHandler]
}