
const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-body"]').value;
  
    console.log(title);
    console.log(content);
  
    var response = await fetch(`/api/newStory`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/newstory');
    } else {
      alert('Failed to update your post');
    }
  
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);

// const postId = document.querySelector('input[name="post-id"]').value;
console.log("testing");
// console.log(postId);

const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-body"]').value;

  console.log(title);
  console.log(content);

  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log(response);
  if (response.ok) {
    document.location.replace('/newstory');
  } else {
    alert('Failed to update your post');
  }
  document.location.replace('/newstory');
};

const deleteClickHandler = async () => {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/newstory');
};