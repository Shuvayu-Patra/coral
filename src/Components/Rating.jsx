import StarRatings from "react-star-ratings";
const Rating = ({rating}) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="green"
    //   changeRating={this.changeRating}
      numberOfStars={5}
      name="rating"
      starDimension="16px"
      starSpacing="2px"
      starRatedDimension="20px"
      starRatedSpacing="2px"
      starEmptyColor="#ddd"
    />
  );
};
export default Rating;
