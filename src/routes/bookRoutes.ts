import { Router } from "express";
import {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook,
    borrowBook,
    returnBook,
    getRecommendations,
    getAvailableBooksController, // ✅ new controller
} from "../controllers/bookController";

const router: Router = Router();

// ✅ Available books route
router.get("/available", getAvailableBooksController);

router.get("/", getAllBooks);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.post("/:id/borrow", borrowBook);
router.post("/:id/return", returnBook);
router.get("/recommendations", getRecommendations);

export default router;
