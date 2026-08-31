/**
 * Interactive Practice Quiz Engine (ગુજરાતી આવૃત્તિ - Gujarati Edition v11.0)
 */

class QuizEngine {
  constructor(physicsData, converterEngine) {
    this.data = physicsData;
    this.converter = converterEngine;
    this.quizBank = this.data.quizBank;
    this.currentQuestion = null;
    this.currentSubject = 'applied_physics';
    this.currentDifficulty = 'all';

    this.stats = {
      score: 0,
      streak: 0,
      bestStreak: 0,
      totalAnswered: 0,
      totalCorrect: 0
    };
  }

  setSubject(subjectId) {
    this.currentSubject = subjectId;
  }

  setDifficulty(diff) {
    this.currentDifficulty = diff;
  }

  getNextQuestion() {
    let pool = this.quizBank.filter(q => q.subjectId === this.currentSubject);
    if (this.currentDifficulty !== 'all') {
      pool = pool.filter(q => q.difficulty === this.currentDifficulty);
    }
    if (pool.length === 0) {
      pool = this.quizBank;
    }

    const randIdx = Math.floor(Math.random() * pool.length);
    this.currentQuestion = pool[randIdx];
    return this.currentQuestion;
  }

  submitAnswer(selectedOptionIdx) {
    if (!this.currentQuestion) return null;
    const isCorrect = selectedOptionIdx === this.currentQuestion.correctIdx;

    this.stats.totalAnswered++;
    if (isCorrect) {
      this.stats.totalCorrect++;
      this.stats.score += 10;
      this.stats.streak++;
      if (this.stats.streak > this.stats.bestStreak) {
        this.stats.bestStreak = this.stats.streak;
      }
    } else {
      this.stats.streak = 0;
    }

    return {
      isCorrect,
      correctOptionIdx: this.currentQuestion.correctIdx,
      explanation: this.currentQuestion.explanation,
      stats: this.getStats()
    };
  }

  getStats() {
    return { ...this.stats };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuizEngine;
}
