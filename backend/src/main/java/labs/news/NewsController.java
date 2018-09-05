package labs.news;

import lombok.AllArgsConstructor;
import org.apache.commons.lang3.RandomUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.stream.Collectors.toList;
import static java.util.stream.IntStream.range;

@RestController
@RequestMapping("news")
@AllArgsConstructor
public class NewsController {

    private final NewsFactory newsFactory;
    private final NewsRepository newsRepository;

    @GetMapping("articles")
    public List<Header> getArticles(@RequestParam(required = false, defaultValue = "10") Integer count) {
        return range(0, count)
                .mapToObj(i -> newsFactory.get())
                .collect(toList());
    }

    @GetMapping("breaking")
    public List<Header> getBreakingNews() {
        return range(0, RandomUtils.nextInt(0, 3))
                .mapToObj(i -> newsFactory.get())
                .collect(toList());
    }

    @GetMapping("articles/{id}")
    public Article getArticle(@PathVariable String id){
        return newsRepository.getArticle(id);
    }

}
