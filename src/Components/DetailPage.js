import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const {slug} = useParams();

  const [getdata, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const item = getdata?.data?.data?.item;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://otruyenapi.com/v1/api/truyen-tranh/${slug}`);
        setData(response);
        setLoading(false);
        console.log(response);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <Helmet>
        <title>{getdata.data.data.seoOnPage.titleHead}</title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{getdata.data.data.seoOnPage.titleHead}</Card.Title>
                {getdata.data.data.seoOnPage.descriptionHead}
                </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{width: "30rem"}}>
              <Card.Img
                variant="top" 
                src={getdata.data.data.APP_DOMAIN_CDN_IMAGE + `/uploads/comics/` + item.thumb_url} 
              />
              <Card.Body>
                <Card.Title>{item.name || "No Title"}</Card.Title>
                <Card.Title
                  dangerouslySetInnerHTML={{__html: item.content}}
                ></Card.Title>
                <Card.Text>{item.updatedAt}</Card.Text>
                <Card.Text>{item.status}</Card.Text>
                <Card.Text>
                  {item.author && item.author.length > 0 ? item.author.map((author, index) => (
                    <Badge bg="info" key={index}>
                      {author.name}
                    </Badge>
                  ))
                  : "Others"}
                </Card.Text>
                <Card.Text>
                  {item.category && item.category.length > 0 ? item.category.map((category, index) => (
                    <Badge bg="info" key={index}>
                      {category.name}
                    </Badge>
                  ))
                  : "Others"}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DetailPage
