/*  Make Method Shaning possible */

class Task {
  static defaultConfig = {
    name: "untitled",
    category: "main",
    isActive: true,
  };

  constructor(config) {
    const finalConfig = Object.assign(defaultConfig, config);

    this.name = this.name;
    this.category = category;
    this.isActive = isActive;
  }
  setName(name) {
    this.name = name;
    // Good
    return this;
  }
  setCategory(category) {
    this.category = category;
    // Good
    return this;
  }
  setActive(isActive) {
    this.isActive = isActive;
    // Good
    return this;
  }
  save() {
    console.log(this.name, this.category, this.isActive);
    // Good
    return this;
  }
}

const task = new Task({
  name: "recording",
  category: "devtheory",
});
// Not Godd
task.setCategory("Content creation");
task.setName("Recording the clean code course");
task.save();

// Good
task
  .setCategory("Content creation")
  .setName("Recording the clean code course")
  .save();
