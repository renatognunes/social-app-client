import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { getPosts } from "../redux/actions/dataActions";

import Post from "../components/Post";
import Profile from "../components/Profile";

class Home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.data;

    let recentPostsMarkup = !loading ? (
      posts.map(post => <Post key={post.postId} post={post} />)
    ) : (
      <p>Loading...</p>
    );

    return (
      <Grid container spacing={4}>
        <Grid item sm={8} xs={12}>
          {recentPostsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

const mapActionsToProps = {
  getPosts
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home);
