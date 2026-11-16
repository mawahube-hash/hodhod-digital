const AI_PROVIDERS = [
  {
    name: "DeepSeek",
    url: "https://api.deepseek.com/chat/completions",
    key: process.env.DEEPSEEK_API_KEY,
    model: "deepseek-chat",
  },
  {
    name: "Qwen",
    url: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions",
    key: process.env.QWEN_API_KEY,
    model: "qwen-plus",
  },
  {
    name: "ChatGPT (OpenAI)",
    url: "https://api.openai.com/v1/chat/completions",
    key: process.env.OPENAI_API_KEY,
    model: "gpt-4o-mini",
  },
  {
    name: "Gemini (Google)",
    url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
    key: process.env.GEMINI_API_KEY,
    model: "gemini-2.5-flash",
  },
  {
    name: "Claude (Anthropic)",
    url: "https://api.anthropic.com/v1/chat/completions",
    key: process.env.ANTHROPIC_API_KEY,
    model: "claude-3-5-sonnet-latest",
  },
];

export async function smartAICall(prompt: string) {
  for (const provider of AI_PROVIDERS) {
    if (!provider.key || provider.key.startsWith("مفتاح_")) continue;
    try {
      const response = await fetch(provider.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${provider.key}`,
        },
        body: JSON.stringify({
          model: provider.model,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (!response.ok) throw new Error(`فشل الاتصال بـ ${provider.name}`);
      const data = await response.json();
      return {
        provider: provider.name,
        reply: data.choices[0].message.content,
      };
    } catch (error) {
      console.warn(`تعذر استخدام ${provider.name}، جارٍ التحويل للأداة التالية...`);
    }
  }
  throw new Error("توقفت جميع أدوات الذكاء الاصطناعي المتاحة أو لم يتم ضبط مفاتيحها.");
}