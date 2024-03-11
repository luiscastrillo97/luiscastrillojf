import { useEffect } from "react";

const useHash = (onSuccess: (id: string) => void) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      onSuccess(id);
    }
  }, []);
};

export default useHash;
