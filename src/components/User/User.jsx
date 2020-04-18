import React from 'react';
import '../Post/Post.scss';

const User = ({ infoUser }) => (
  <article className="post">
    <header className="post__header">
      <div className="user">
        <a href="/" className="user__thumb">
          <img src={infoUser.avatar} alt={infoUser.name} />
        </a>

        <a href="/" className="user__name">{infoUser.name}</a>
      </div>

      <button className="post__context">
        <i className="fas fa-ellipsis-h" />
      </button>
    </header>
  </article>
)

export default User;
