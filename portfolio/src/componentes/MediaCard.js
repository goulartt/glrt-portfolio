import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import '../css/MediaCard.css';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
};

class MediaCard extends Component {


  render() {
    return (
        <Card className="cardCustom">
          <CardActionArea>
            <CardMedia
              className={this.props.media}
              image={this.props.img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <h2>
                { this.props.content.title }
              </h2>
              <p>
              {this.props.content.conteudo}
              </p>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href={this.props.link} size="large" color="primary">
              Share
            </Button>
            <Button size="large" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      );
  }
 
}

MediaCard.propTypes = {
  props: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
