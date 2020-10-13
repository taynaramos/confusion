import React, { Component } from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    render() {
        const dish = this.props.selectedDish
        const comments = dish.comments
        const arrayComments = { comments }


        const avaliation = arrayComments.comments.map((comment) => {
            if (comment.comment != null) {

            return (
                <>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {comment.date}</p>
                </>
            )}
            else {
                return (
                    <div></div>
                );
            }
        })

        return (
            <>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Media body>
                        <h4 heading>
                            Comments
                        </h4>
                        {avaliation}
                    </Media>
                </div>
            </>
        )

    };
}

export default Dishdetail;