const messages = {
  nutrition : [
    "Fuel your body with the right food to function at its best.",
  "Eating well is a form of self-respect.",
  "A balanced diet is a foundation for a healthy lifestyle.",
  "Nutrition is the only remedy that can bring full recovery and can be sustained for a lifetime.",
  "Every bite you take is either fighting disease or feeding it.",
  "Choose foods that make your body feel as good as your favorite outfit looks.",
  "Eat for the body you want, not for the body you have.",
  "Your diet is a bank account. Good food choices are good investments.",
  "Give your body the right nutrients, and it will thank you later.",
  "Healthy eating is a way of life, not a temporary fix.",
  "Nourish your body, and it will nourish your soul.",
  "Eat colors, not calories.",
  "Wellness starts with what you put in your body.",
  "Good nutrition is not just about eating less, but about eating right.",
  "Listen to your body; it knows what it needs.",
  "Don't count calories; make every calorie count.",
  "Eat nutrient-dense foods for a nutrient-dense life.",
  "Choose foods that empower your health, not instant gratification.",
  "Food is the most abused anxiety drug. Exercise is the most underutilized antidepressant.",
  "Your body deserves the best - fuel it with nutritious choices."
  ],

  physical : [
    "Move your body - it's the only one you've got.",
  "Fitness is not about being better than someone else; it's about being better than you used to be.",
  "Take care of your body; it's the only place you have to live.",
  "Your health is an investment, not an expense.",
  "Strength comes from the body. Resilience comes from the mind.",
  "A strong body is a reflection of a strong mind.",
  "Exercise is a celebration of what your body can do, not a punishment for what you ate.",
  "Your body can do anything, it's your mind you have to convince.",
  "Physical fitness is the first requisite of happiness.",
  "Train your mind, and your body will follow.",
  "Sweat now, shine later.",
  "Fitness is not a destination; it's a way of life.",
  "Don't wait to reach your goal to be proud of yourself. Be proud of every step you take toward it.",
  "Your body achieves what your mind believes.",
  "A healthy body is a guest chamber for the soul.",
  "Make time for yourself; your future self will thank you for it.",
  "Fitness is not just about the body. It's also about the mind and the soul.",
  "Take care of your body. It's the only place you have to live in.",
  "Exercise is the key not only to physical health but to peace of mind.",
  "Your body is a reflection of your lifestyle."
  ],
  mental: [
    "Your mental health is just as important as your physical health.",
    "Caring for your mind is as important and crucial as caring for your body.",
    "Mental health is not a destination but a process. It's about how you drive, not where you're going.",
    "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
    "Self-care is giving the world the best of you instead of what's left of you.",
    "Take a break, not because you're lazy, but because your mind needs it.",
    "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
    "The strongest people are not those who show strength in front of us but those who win battles we know nothing about.",
    "It's okay not to be okay as long as you are not giving up.",
    "You don't have to control your thoughts; you just have to stop letting them control you.",
    "Inhale the future, exhale the past.",
    "You are worth the quiet moment. You are worth the deeper breath.",
    "The mind is like a parachute. It doesn't work if it isn't open.",
    "Don't believe everything you think.",
    "Happiness is not the absence of problems, but the ability to deal with them.",
    "Take care of your thoughts when you are alone, and take care of your words when you are with people.",
    "Your calm mind is the ultimate weapon against your challenges.",
    "Mindfulness is a way of befriending ourselves and our experience.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Embrace the glorious mess that you are."
  ]
};

const result = {};

const getRandom = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

for (theme in messages) {
  result[theme] = getRandom(messages[theme]);
}

exports.result = result;

