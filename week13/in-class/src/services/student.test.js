require("dotenv/config");
const { ObjectId } = require("mongodb");
const Student = require("../models/Student");
const { NotFoundError } = require("../middleware/errors");
jest.mock("../models/Student");
// jest.mock("./images");
const studentService = require("../services/student");
describe("student service", () => {
  describe("#getAll", () => {
    it("should return values from student.find()", async () => {
      //Arrange
      const EXPECTED = [
        {
          _id: new ObjectId(),
          firstName: "Othmane",
          lastName: "Belatik",
          owner: {
            _id: new ObjectId(),
            name: "Othmane",
          },
          images: [],
        },
      ];
      Student.find.mockResolvedValue(EXPECTED);
      //Act
      const result = await studentService.getAll();
      //Assert
      expect(result).toEqual(EXPECTED);
      expect(Student.find.mock.calls.length).toBe(1);
    });
  });
  describe("#getById", () => {
    it("should return values from student.find()", async () => {
      //Arrange
      const _id = new ObjectId();
      const EXPECTED = {
        _id,
        firstName: "Othmane",
        lastName: "Belatik",
        owner: {
          _id: new ObjectId(),
          name: "Othmane",
        },
        images: [],
      };
      Student.findById.mockResolvedValue(EXPECTED);
      //Act
      const result = await studentService.getById(_id.toString());
      //Assert
      expect(result).toEqual(EXPECTED);
      expect(Student.findById.mock.calls.length).toBe(1);
      expect(Student.findById).toBeCalledWith(_id.toString());
    });
    it("should throw an error if not found", async () => {
      //Arrange
      const _id = new ObjectId().toString();
      Student.findById.mockResolvedValue(null);
      //Act
      //Assert
      await expect(studentService.getById(_id)).rejects.toThrow(
        new NotFoundError(`student with id ${_id} not found`)
      );
    });
  });
});
