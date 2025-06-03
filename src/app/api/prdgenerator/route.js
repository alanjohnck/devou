// app/api/generate-prd/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(request) {
  try {
    const { userInput } = await request.json();

    if (!userInput || userInput.trim().length === 0) {
      return NextResponse.json(
        { error: 'User input is required' },
        { status: 400 }
      );
    }

    const prdPrompt = `
You are a senior product manager expert at creating comprehensive Product Requirements Documents (PRDs). 

Based on the user's input: "${userInput}"

Create a detailed PRD with the following structure:

## Product Requirements Document

### 1. Executive Summary
- Brief overview of the product concept
- Key value proposition
- Target market summary

### 2. Problem Statement
- What problem does this solve?
- Who experiences this problem?
- Why is this problem worth solving?

### 3. Product Overview
- Product name suggestion
- Core functionality
- Key features (3-5 main features)

### 4. Target Users
- Primary user personas
- User demographics
- User needs and pain points

### 5. User Stories
- 5-7 user stories in the format: "As a [user type], I want [goal] so that [benefit]"

### 6. Technical Requirements
- Platform requirements (Web, Mobile, etc.)
- Key technical considerations
- Integration requirements

### 7. Success Metrics
- Key Performance Indicators (KPIs)
- Success criteria
- Measerable goals

### 8. Timeline & Milestones
- Suggested development phases
- Key milestones
- Estimated timeline

Make it comprehensive but concise. Use clear, professional language suitable for developers and stakeholders. Format with markdown for easy reading.
`;

    const completion = await client.chat.completions.create({
      extra_headers: {
        "HTTP-Referer": process.env.YOUR_SITE_URL || "http://localhost:3000",
        "X-Title": process.env.YOUR_SITE_NAME || "PRD Builder",
      },
      model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
      messages: [
        {
          role: "system",
          content: "You are a senior product manager expert at creating comprehensive Product Requirements Documents (PRDs). Always provide structured, actionable, and detailed PRDs."
        },
        {
          role: "user",
          content: prdPrompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const generatedPRD = completion.choices[0].message.content;

    return NextResponse.json({
      success: true,
      prd: generatedPRD,
    });

  } catch (error) {
    console.error('Error generating PRD:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate PRD. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}