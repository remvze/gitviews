# GitViews ✨

> Super simple GitHub view counter.

![GitHub Repo Views](https://gitviews.com/repo/remvze/gitviews.svg)

---

## Badges 🏅

### Profile Views

**URL**

```
https://gitviews.com/user/<your-github-username>.svg
```

**Markdown**

```markdown
![GitHub Profile Views](https://gitviews.com/user/<your-github-username>.svg)
```

> [!NOTE]
> Please replace `<your-github-username>` with your GitHub username (without @).

---

### Repo Views

**URL**

```
https://gitviews.com/repo/<your-username>/<your-repo>.svg
```

**Markdown**

```markdown
![GitHub Repo Views](https://gitviews.com/repo/<your-username>/<your-repo>.svg)
```

> [!NOTE]
> Please replace `<your-username>` with your GitHub username (without @), and `<your-repo>` with your repository name.

---

### All Repos Views

**URL**

```
https://gitviews.com/user/<your-github-username>/repos.svg
```

**Markdown**

```markdown
![GitHub Repos Views](https://gitviews.com/user/<your-github-username>/repos.svg)
```

> [!NOTE]
> Please replace `<your-github-username>` with your GitHub username (without @).

---

## Customization 🎨

GitViews badges support several customization parameters, allowing you to style badges to match your theme.

You can add these as query parameters (`?key=value`) to any badge URL.

### Available Parameters

`style`

Controls the overall badge style.

**Options:**

- `flat`
- `flat-square`
- `for-the-badge`
- `social`
- `plastic`

**Example:**

```
https://gitviews.com/user/<your-username>.svg?style=for-the-badge
```

---

`label-color`

Sets the background color of the badge label. Accepts hex, rgb, or color names.

**Example:**

```
https://gitviews.com/repo/<user>/<repo>.svg?label-color=blue
```

```
https://gitviews.com/repo/<user>/<repo>.svg?label-color=%23ff8800
```

> [!NOTE]
> (Use `%23` for `#` in URLs.)

---

`color`

Sets the color of the value / counter portion of the badge.

**Example:**

```
https://gitviews.com/user/<your-username>/repos.svg?color=green
```

---

### Combined Example

```
https://gitviews.com/user/<your-username>.svg?style=flat-square&label-color=%23000&color=%23ff00ff
```

```markdown
![GitHub Profile Views](https://gitviews.com/user/<your-username>.svg?style=flat-square&label-color=%23000&color=%23ff00ff)
```
