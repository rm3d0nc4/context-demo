import { useContext } from "react";
import { LevelContext } from "../../contexts/level_context";

interface HeadingProps {
    children: React.ReactNode;
}

export default function Heading({children}: HeadingProps) {
    const level = useContext(LevelContext)
    
    switch (level) {
      case 1:
        return <h1 className="heading">{children}</h1>;
      case 2:
        return <h2 className="heading">{children}</h2>;
      case 3:
        return <h3 className="heading">{children}</h3>;
      case 4:
        return <h4 className="heading">{children}</h4>;
      case 5:
        return <h5 className="heading">{children}</h5>;
      case 6:
        return <h6 className="heading">{children}</h6>;
      default:
        throw Error('Unknown level: ' + level);
    }
  }
  