import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/useRecipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generate = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generate();
  }, []);

  return (
    <div>
      <h2>🤖 Recommended For You</h2>

      {recommendations.length === 0 && <p>No recommendations yet.</p>}

      {recommendations.map((recipe) => (
        <p key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default RecommendationsList;
