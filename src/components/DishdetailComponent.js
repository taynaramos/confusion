import React from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle> {dish.name} </CardTitle>
                    <CardText> {dish.description} </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComments({ comments }) {
    return (
        comments.map((comment) => {
            if (comment.comment != null) {

                return (
                    <>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                    </>
                )
            }
            else {
                return (
                    <div></div>
                );
            }
        })
    )
}

const DishDetail = (props) => {

    return (
        <div className="container">
            {(props.dish !== undefined) ?
                (
                    <>
                        <RenderDish dish={props.dish}/>
                        <div className="col-12 col-md-5 m-1">
                            <Media body>
                                <h4 heading>
                                    Comments
                                </h4>
                                <RenderComments comments={props.dish.comments} />
                            </Media>
                        </div>
                    </>) : null}
        </div>

    )

};

export default DishDetail;