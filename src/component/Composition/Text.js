export function Text({addEmoji}){
    const text='I am JavaScript Programming language';
    return(
        <div>
            {addEmoji?addEmoji(text,'💖'):text}
        </div>
    )
}

export default Text;