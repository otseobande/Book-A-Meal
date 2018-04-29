import menus from '../../dummy-models/menus';
import meals from '../../dummy-models/meals';
import menuCategories from '../../dummy-models/menuCategories';
import mealmenuCategories from '../../dummy-models/mealmenuCategories';

const getSpecificDaymenu = (req, res) => {
  const { date } = req.params;

  const jsDate = new Date(date);

  if (Number.isNaN(jsDate.getTime())) {
    return res.status(400).json({
      status: 'error',
      message: 'Date format should be DD-MM-YYYY',
    });
  }
  
  const foundMenu = menus.find(menu => (new Date(menu.date)).getTime() === jsDate.getTime());

  if (!foundMenu) {
    return res.status(404).json({
      status: 'error',
      message: 'No Records Found',
    });
  }


  const responseData = [];
  menus.data.forEach((menu) => {
    if((new Date(menu.date)).getTime() === jsDate.getTime()){
      const data = {
        id: menu.id,
        title: menu.title,
        date: menu.date,
      };
      const categories = [];
      menuCategories.data.forEach((category) => {
        if (parseInt(category.menuId, 10) === parseInt(menu.id, 10)) {
          const categoryData = {
            id: category.menuId,
            title: category.title,
          };
          const matchingMeals = [];
          mealmenuCategories.data.forEach((mealmenu) => {
            meals.data.forEach((meal) => {
              if (parseInt(meal.id, 10) === parseInt(mealmenu.mealId, 10) &&
                              parseInt(category.id, 10) === parseInt(mealmenu.menuCategoryId, 10)) {
                matchingMeals.push(meal);
              }
            });
          });

          categoryData.meals = matchingMeals;
          categories.push(categoryData);
        }
      });
      data.categories = categories;
      responseData.push(data);
    }
  });

  return res.status(200).json({
    status: 'success',
    data: responseData,
  });
};


export default getSpecificDaymenu;
