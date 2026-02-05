"use client";

import { useState, useCallback } from "react";

export function useClipboard(timeout = 2000) {
    const [hasCopied, setHasCopied] = useState(false);

    const copyToClipboard = useCallback((text: string) => {
        if (!navigator.clipboard) return;

        navigator.clipboard.writeText(text).then(() => {
            setHasCopied(true);
            setTimeout(() => setHasCopied(false), timeout);
        });
    }, [timeout]);

    return { hasCopied, copyToClipboard };
}
