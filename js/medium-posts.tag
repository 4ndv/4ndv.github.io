<medium-posts>
	<div class="container">
		<h3 class="page-header">Recent posts</h3>

		<div if={not_loaded}>
			<h4>Loading posts...</h4>
		</div>

		<div each={posts}>
			<h3><a href="{link}">{title}</a></h4>
		</div>
	</div>

	<script>
		self = this
		self.update({ not_loaded: true })
		feed = new google.feeds.Feed('https://medium.com/feed/' + opts.user + '/')
		feed.load (data)->
			console.log data
			self.posts = data.feed.entries
			self.update({ not_loaded: false })
			return
	</script>
</medium-posts>