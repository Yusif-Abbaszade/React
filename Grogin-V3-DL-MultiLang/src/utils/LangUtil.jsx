import { useContext } from "react"
import { LangContext } from "../context/LangContext"

const LangUtil = ({AZ, EN}) => {

  const [lang, setLang] = useContext(LangContext);
  return (
    (lang==='AZ'?AZ:EN)
  )
}

export default LangUtil