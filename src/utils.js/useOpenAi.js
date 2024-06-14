import { useSelector } from "react-redux";
import OpenAI from "openai";

const useOpenAI = () => {
  const apiKey = useSelector((state) => state?.gpt?.OPENAI_KEY);

  if (!apiKey) return null

  return new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });
};

export default useOpenAI;
