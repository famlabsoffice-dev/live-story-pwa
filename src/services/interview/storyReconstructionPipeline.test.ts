import { describe, expect, it } from 'vitest';
import { StoryReconstructionPipeline } from './storyReconstructionPipeline';

describe('StoryReconstructionPipeline', () => {
  it('combines memories and answers', () => {
    const result = new StoryReconstructionPipeline().reconstruct(
      { sessionId: '1', collectedFacts: ['childhood'] },
      ['family story']
    );

    expect(result.memories).toContain('family story');
  });
});
