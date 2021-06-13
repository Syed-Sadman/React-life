import Emoji from "./Emoji";

class Text extends Emoji{
    constructor(props){
        super(props);
    }

    render() {
     const decoText=this.addEmoji('I am JS','❤');
     return super.render(decoText);
    }
}

export default Text;