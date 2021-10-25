import { Component } from "react";


// pass 3 arguments to this component
// - onClick: function will be call on click
// - bgcolor: color of button, consists of #ffd53b, #211931, #ffffff, #cbcfc7
// - btnName: name of button
class Button extends Component {
    setColor(bgcolor) {
        let borderColor = bgcolor === "#ffffff" ? "#211931" : "#ffffff";
        let color = bgcolor === "#211931" ? "#ffffff" : "#211931";

        return {
            backgroundColor: bgcolor,
            borderColor: borderColor,
            color: color,
            fontSize: "16px"
        }
    }

    render() {
        return (
            <button onClick={this.props.onClick}
                style={this.setColor(this.props.bgcolor)}
                type="button"
                class="btn btn-default">
                {this.props.btnName}
            </button>
        );
    }
}

export default Button;
