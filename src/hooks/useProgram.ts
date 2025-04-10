import { useCallback, useEffect, useState } from "react";
import type { StrapiProgram } from "../types/program.types";
import { fetchProgram } from "../api/program.api";

export function useProgram() {
  const [program, setProgram] = useState<StrapiProgram["data"]>();
  const [fetching, setFetching] = useState(false);

  const getProgram = useCallback(() => {
    setFetching(true);
    fetchProgram().then(({ data }) => {
      setProgram(data);
      setFetching(false);
    });
  }, []);

  useEffect(getProgram, []);

  return { program, fetching };
}
