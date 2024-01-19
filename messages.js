const messages = {
  nutrition: [
    'Let food be thy medicine and medicine be thy food.',
    'A well-balanced diet is a symphony for the body, nourishing it with the harmony of health.',
    'He who eats in moderation treasures the gift of vitality.',
    'The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison.',
    'Nature provides the best nutrients; our task is to embrace its abundance with gratitude.',
    'Eat to live, not live to eat.',
    'The more colorful your plate, the more vibrant your health.',
    'Your body is a temple, treat it with the reverence it deserves through mindful nourishment.',
    'Every meal is a chance to nourish your body and soul; make it a choice for vitality.',
    'Digestion is the cornerstone of health; choose foods that support its gentle rhythm.',
    'Eating well is a form of self-respect.',
    'Let your food be your energy, not your entertainment.',
    'Your health is an investment, not an expense.',
    'The first wealth is health.',
    'Eat like you love yourself. Move like you love yourself. Speak like you love yourself.',
    'In the abundance of nutrients, find the richness of life.',
    'To keep the body in good health is a duty; otherwise, we shall not be able to keep our mind strong and clear.',
    'Good nutrition will prevent 95% of all diseases.',
    'Your body hears everything your mind says. Stay positive, nourish well.',
    'The secret of health for both mind and body is not to mourn for the past, worry about the future, or anticipate troubles, but to live in the present moment wisely and earnestly.',
  ],
  physical: [
    'A journey of a thousand miles begins with a single step.',
    "Movement is a medicine for creating change in a person's physical, emotional, and mental states.",
    'He who has health has hope, and he who has hope has everything.',
    'To enjoy the glow of good health, you must exercise.',
    "The only bad workout is the one that didn't happen.",
    "Take care of your body; it's the only place you have to live.",
    'Strength does not come from the body. It comes from the will.',
    'The secret to getting ahead is getting started.',
    "Your health account, your bank account, they're the same thing. The more you put in, the more you can take out.",
    'Movement is life. Life is a process. Improve the quality of the process and you improve the quality of life itself.',
    'To keep the body in good health is a duty, otherwise, we shall not be able to keep our mind strong and clear.',
    'Sweat cleanses from the inside. It comes from places a shower will never reach.',
    'The only limits that exist are the ones you place on yourself.',
    "Don't watch the clock; do what it does. Keep going.",
    "Fitness is not about being better than someone else; it's about being better than you used to be.",
    "It's not about perfect. It's about effort.",
    'The body achieves what the mind believes.',
    'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    'In the middle of difficulty lies opportunity.',
  ],
  mental: [
    'The mind is everything. What you think, you become.',
    'Happiness is not something ready-made. It comes from your own actions.',
    'The best time to plant a tree was 20 years ago. The second-best time is now.',
    "Calm mind brings inner strength and self-confidence, so that's very important for good health.",
    "Worrying does not take away tomorrow's troubles; it takes away today's peace.",
    "The more you know yourself, the more you understand life's game and how you have to play it.",
    'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.',
    'Anxiety does not empty tomorrow of its sorrows but only empties today of its strength.',
    'Do not dwell in the past; do not dream of the future, concentrate the mind on the present moment.',
    "You can't stop the waves, but you can learn to surf.",
    'The only thing we have to fear is fear itself.',
    'Peace comes from within. Do not seek it without.',
    'Change your thoughts, and you change your world.',
    'It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.',
    'Our greatest glory is not in never falling, but in rising every time we fall.',
    'The purpose of our lives is to be happy.',
    'You have power over your mind, not outside events. Realize this, and you will find strength.',
    'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    'In the middle of difficulty lies opportunity.',
  ],
};

const getRandom = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const getWisdom = () => {
  return {
    nutrition: getRandom(messages.nutrition),
    physical: getRandom(messages.physical),
    mental: getRandom(messages.mental),
  };
};

module.exports = { getWisdom };
