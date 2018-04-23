import express from 'express';

const router = express.Router();

// These routes are to be prepended with "/meals"
router.get("/",() => {});

router.post("/",() => {});

router.get('/:mealId', () => {});

router.put("/:mealId",() => {});

router.delete("/:mealId",() => {});

export default router;