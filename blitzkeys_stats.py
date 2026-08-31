import re

with open("data.js", "r", encoding="utf-8") as f:
    raw = f.read()

# extract each object block {...}
objects = re.findall(r"\{([^{}]+)\}", raw, re.DOTALL)

unique_words = set()
total_words = 0
sentence_count = 0


def extract_words(text):
    return re.findall(r"[a-zA-Z']+", text.lower())


for obj in objects:
    # question
    q_match = re.search(r'question:\s*"([^"]+)"', obj)
    if q_match:
        sentence_count += 1
        words = extract_words(q_match.group(1))
        total_words += len(words)
        unique_words.update(words)

    # options
    options_match = re.search(r'options:\s*\[(.*?)\]', obj, re.DOTALL)
    if options_match:
        options = re.findall(r'"([^"]+)"', options_match.group(1))
        for opt in options:
            words = extract_words(opt)
            total_words += len(words)
            unique_words.update(words)

    # answer
    answer_match = re.search(r'answer:\s*"([^"]+)"', obj)
    if answer_match:
        words = extract_words(answer_match.group(1))
        total_words += len(words)
        unique_words.update(words)

print("=== Dataset Stats ===")
print("Sentences:", sentence_count)
print("Total words:", total_words)
print("Unique words:", len(unique_words))
