import type {
  AgentContext,
  AgentResult,
  AgentTask,
} from "./aiAgentTypes";

export class AIAgentArchitecture {
  createTask(
    role: AgentTask["role"],
    action: string,
    priority = 50,
  ): AgentTask {
    return {
      id: crypto.randomUUID(),
      role,
      action,
      priority,
    };
  }

  execute(
    task: AgentTask,
    context: AgentContext,
  ): AgentResult {
    return {
      taskId: task.id,
      success: Boolean(context.sessionId),
      output: `${task.role} processed ${task.action}`,
    };
  }

  orchestrate(tasks: AgentTask[]): AgentTask[] {
    return [...tasks].sort((a, b) => b.priority - a.priority);
  }
}
