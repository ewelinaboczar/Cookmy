class App extends React.Component {
    render(){
        return(
            <>
                <div class="upper">
                    <p>Welcome to </p>
                    <p id='tittle'>Cookmy.</p>
                </div>
                <StartInfo number="1"/>
                <div class="dots">
                    <DotsNav isClicked="true" number="1"/>
                    <DotsNav isClicked="false" number="2"/>
                    <DotsNav isClicked="false" number="3"/>
                    <DotsNav isClicked="false" number="4"/>
                </div>
            </>
        )
    }
}

const StartInfo = (props) => {
    const num = parseInt(props.number)
    console.log("startinfo")
    if(num === 1){
        return(
                <div class="info-panel">
                    <img src="../img/deska.png"></img>
                    <p>Start collecting new recipes in one place.</p>
                </div>
        )
    }
}

class DotsNav extends React.Component {
    state = {
        isClicked: this.props.isClicked
    }

    StartInfo = (props) => {
        const num = parseInt(props.number)
        console.log("startinfo")
        if(num === 1){
            return(
                    <div class="info-panel">
                        <img src="../img/deska.png"></img>
                        <p>Start collecting new recipes in one place.</p>
                    </div>
            )
        }
    }

    render(){
        return(
            <button id="dot" onClick={() => this.StartInfo(2)}></button>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))
