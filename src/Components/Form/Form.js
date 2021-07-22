import styled from "styled-components";
import pentagon from "./pentagon.svg";
import loading from "./loading.gif";

const Form = ({ className }) => {

    const onClick = () => {
        
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const emailInput = document.getElementById("email");

        const nameSpan = document.getElementById("name");
        const emailSpan = document.getElementById("email-modal");
        const welcomeSpan = document.getElementById("welcome");

        nameSpan.innerHTML = `${firstName.value} ${lastName.value}`
        emailSpan.innerHTML = `${emailInput.value}`;
        welcomeSpan.innerHTML = `Welcome back, ${firstName.value}!`;

        document.getElementById("modal").classList.add("show")
    }

    const backTo = () => {
        document.getElementById("modal").classList.remove("show")

    }

    return (
        <div className={className}>
            <div id="imgContainer"><img src={pentagon} alt="pentagon" /></div>
            <form id="formitself" onSubmit={(e) => {e.preventDefault()}}>
                <h1>LogIn</h1>
                <input id="first-name" type="text" placeholder="first name" required />

                <input id="last-name" type="text" placeholder="last name" required />

                <input id="email" type="email" placeholder="email" required />

                <button type="submit" onClick={onClick}>Submit</button>
            </form>
            <div id="modal">
                <span id="name"></span>
                <span id="email-modal"></span>
                <span id="welcome"></span>
                <img id="loading" src={loading} alt="loading" />
                <button id="back" type="button" onClick={backTo}>Back</button>

            </div>
        </div>
    )
}

const StyledForm = styled(Form)`
    position: relative;
    width: 100%;
    height: 100vh;

    background-color: #332433;

    overflow: hidden;

    #imgContainer {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.2);
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
        img {
            width: 100vh;
            
            animation: imgSpin infinite 30s linear;

            @keyframes imgSpin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        }
        
    form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        h1 {
            position: absolute;
            top: -80px;
            margin: -20px 0 20px 0;
            padding: 0;
            font-size: 4.5em;
            font-family: Lalezar, sans-serif;
            letter-spacing: 0.1em;
            color: white;
            text-shadow: 0 0 10px #F9C784;
            cursor: default;
        }

        input:first-of-type {
            margin-top: 50px;
        }

        input {
            font-size: 1.3em;
            font-family: "Roboto Mono", monospace;
            outline: none;
            border: none;
            background-color: transparent;
            color: #F9C784;
            padding: 10px 10px 5px 10px;
            margin-bottom: 10px;
            border-bottom: 3px solid #6CCAF2;
            text-align: center;
            
            transition: border-bottom 0.3s;

            &::placeholder {
                color: rgba(249, 199, 132, 0.5);
                text-align: center;
            }
            &:focus {
                border-bottom: 3px solid #FC814A;
            }
        }

        button {
            margin: 30px 0 0 0;
            padding: 18px 25px 7px 25px;
            border: 0;
            border-bottom: 7px solid transparent;
            font-size: 1.5em;
            font-family: Lalezar, sans-serif;
            background-color: #F9C784;
            color: #332433;
            cursor: pointer;
            
            transition: transform 0.7s, background-color 0.3s, color 0.3s, border-bottom 0.3s;
            
            &:hover {
                transform: translateY(-10px) ;
                background-color: #0779B5;
                color: #F9C784;
                border-bottom: 7px solid #F9C784;
            }   
        }
    }

    #modal {
        width: 100%;
        height: 100vh;
        position: absolute;
        bottom: -100vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        color: #332433;
        background-color: rgba(108, 202, 242, 0.95);
        font-family: "Roboto Mono", monospace;

        #name, #email-modal {
            font-size: 1.3em;
            margin: 10px;
            cursor: default;
        }

        #welcome {
            font-size: 2em;
            font-weight: bold;
            margin: 100px 0 100px 0;
            cursor: default;
        }

        transition: bottom 0.5s;

        #loading {
            width: 5%;
            background-color: #332433;
            padding: 20px;
            border-radius: 50%;
        }

        #back {
            margin-top: 75px;
            padding: 17px 30px 10px 30px;
            border: 0;
            border-bottom: 7px solid transparent;
            font-size: 1.5em;
            font-family: Lalezar, sans-serif;
            font-weight: bold;
            letter-spacing: 0.1em;
            background-color: #FC814A;
            color: #332433;
            cursor: pointer;

            transition: transform 0.7s, background-color 0.3s, color 0.3s, border-bottom 0.3s;
            
            &:hover {
                transform: translateY(-10px) ;
                background-color: #332433;
                color: #F9C784;
                border-bottom: 7px solid #FC814A;
            }
            
        }

        &.show {
            bottom: 0;
        }

    }

`

export default StyledForm
