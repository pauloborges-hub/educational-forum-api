import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository';
import { Answer } from '../entities/answer';

test('create an answer', async () => {
    const fakeAnswersRepository: AnswersRepository = {
        create: async (answer: Answer) => {
            return;
        }
    }
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

    const answer = await answerQuestion.execute({
        questionId: '1',
        instructorId: '1',
        content: 'Nova resposta'
    })

    expect(answer.content).toEqual('Nova resposta')
})