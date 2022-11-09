import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import "./NewsList.css";
const SingleNews = () => {
    let { id }= useParams()
    const newsList = useSelector(state => state.news.newsList)
    let singleNews = newsList && id && newsList[id];
    return (
        <Container>
            <Row>
                {singleNews && (
                    <Col md={{ span: '6', offset: '3' }} className="single-news">
                        <Card>
                            <Card.Img variant="top" src={singleNews.urlToImage} alt="single-news" />
                            <Card.Body>
                                <Card.Title>{singleNews.title && singleNews.title.length > 100 ? `${singleNews.title.slice(0, 100)}...` : singleNews.title}</Card.Title>
                                <Card.Text>
                                    {singleNews.description}
                                </Card.Text>
                                <Button variant="dark">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}


            </Row>
        </Container>
    )
}

export default SingleNews;