import React, { Component } from 'react';


class Section extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <section>
                <div className="container">
                <div className="row align-items-center">
                    <div className={"col-lg-6 " + this.props.order}>
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src={this.props.image} alt="" />
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="p-5">
                        <h2 className="display-4">For those about to rock...</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Section;