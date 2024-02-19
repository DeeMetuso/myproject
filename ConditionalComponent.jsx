export default function ConditionalComponent(){
    const display = false;
    if (display) {
        return (
            <div>
                <h3> This is a conditional statement</h3>
            </div>
        );
    } else {
        return (
            <div>
            <h3> Code EVERyday</h3>
        </div>
        )
        
    }
}