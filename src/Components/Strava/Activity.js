import React from "react";

const Activities = ({activities}) => {
  return (
    <div>
      <h3> User Activities </h3>
      <ul className="list-group">
        {activities.map((activity, index) => {
          return (
            <li className="list-group-item" key={activity.name}>
              {activity.html_url && <h4><a href={activity.html_url}>{activity.name}</a></h4>}
              {activity.description && <p>{activity.description}</p>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Activities.propTypes = {
  username: React.PropTypes.string.isRequired, 
  activity: React.PropTypes.array.isRequired
}

export default Activities