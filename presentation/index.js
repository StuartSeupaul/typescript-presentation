// Import React
import React from "react";
import Prism from "prismjs";
import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Image,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  intellisense: require("../assets/intellisense.gif")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  typescriptBackground: "#152740",
  white: "#FFFFFF",
  subText: "#FF931E"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="typescriptBackground">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Typescript
          </Heading>
          <Text margin="10px 0 0" textColor="subText" size={1} fit bold>
            A cleaner, enhanced Javascript
          </Text>
        </Slide>
        
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!./code/firstexamplejavascript.js")}
          ranges={[
            { loc: [0, 1], title: "Regular Javascript" },
            { loc: [0, 1], note: "Number" },
            { loc: [1, 2], note: "String" },
            { loc: [3, 5], note: "String??" },
        ]}/>
        
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!./code/firsttypescriptexample.ts")}
          ranges={[
            { loc: [0, 1], title: "Typescript" },
            { loc: [0, 1], note: "Number" },
            { loc: [1, 2], note: "String" },
            { loc: [3, 4], note: "Error" },
        ]}/>

        <Slide transition={["fade"]} bgColor="secondary" textColor="subText">
          <BlockQuote>
            <Heading>
              Why? Isn't that tedious with little benefit?
            </Heading>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="typescriptBackground" textColor="white">
          <Heading size={6} textColor="subText" caps>Pros of Typescript</Heading>
          <List>
            <ListItem>Similar to other languages.</ListItem>
            <ListItem>Intellisense support</ListItem>
            <ListItem>Saves time debugging</ListItem>
            <ListItem>No unnecessary unit tests</ListItem>
            <ListItem>Adds new language features</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="typescriptBackground" textColor="white">
          <BlockQuote>
            <Quote>Saving time debugging</Quote>
          </BlockQuote>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!./code/javascriptbug.js")}
          ranges={[
            { loc: [0, 1], title: "Regular javascript" },
            { loc: [0, 5], note: "Function for getting users by a status" },
            { loc: [6, 7], note: "Expected array of users"},
            { loc: [8, 11], note: "Emailing array of users" },
        ]}/>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!./code/typescriptfix.ts")}
          ranges={[
            { loc: [0, 1], title: "Typescript way" },
            { loc: [14, 15], note: "Explicitly defining type of variable return" },
            { loc: [18, 20], note: "Have to return an array of Users"},
            { loc: [23, 26], note: "Won't give an undefined error" },
        ]}/>

        <Slide transition={["zoom"]} bgColor="typescriptBackground">
          <Text margin="10px 0 0" textColor="subText" size={1} fit bold>
            Intellisense
          </Text>
          <Image src={images.intellisense}>
          </Image>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!./code/newfeatures.ts")}
          ranges={[
            { loc: [0, 1], title: "Typescript new features" },
            { loc: [0, 6], note: "Enums" },
            { loc: [7, 18], note: "Access modifiers for OOP"},
            { loc: [19, 24], note: "Interfaces" },
            { loc: [25, 37], note: "Objects must be in same format as interface"},
        ]}/>        

      </Deck>
    );
  }
}
